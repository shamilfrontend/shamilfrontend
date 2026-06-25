import { nextTick, type Ref } from 'vue';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute('disabled') && element.tabIndex !== -1,
  );
}

export function trapFocus(event: KeyboardEvent, container: HTMLElement | null): void {
  if (event.key !== 'Tab' || !container) {
    return;
  }

  const focusableElements = getFocusableElements(container);

  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement as HTMLElement | null;

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

export async function restoreFocus(previousFocus: HTMLElement | null): Promise<void> {
  await nextTick();
  previousFocus?.focus();
}

export function rememberFocus(): HTMLElement | null {
  return document.activeElement instanceof HTMLElement ? document.activeElement : null;
}

export function bindFocusTrap(
  containerRef: Ref<HTMLElement | null>,
  onKeydown: (event: KeyboardEvent) => void,
): () => void {
  const handler = (event: KeyboardEvent) => {
    trapFocus(event, containerRef.value);
    onKeydown(event);
  };

  window.addEventListener('keydown', handler);

  return () => {
    window.removeEventListener('keydown', handler);
  };
}

export function bindFocusTrapWhen(
  isActive: Ref<boolean>,
  containerRef: Ref<HTMLElement | null>,
  onKeydown: (event: KeyboardEvent) => void,
): () => void {
  const handler = (event: KeyboardEvent) => {
    if (!isActive.value) {
      return;
    }

    trapFocus(event, containerRef.value);
    onKeydown(event);
  };

  window.addEventListener('keydown', handler);

  return () => {
    window.removeEventListener('keydown', handler);
  };
}

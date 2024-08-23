export const useScrollLock = (modalOpenCurrentValue: boolean, modalOpenPreviousValue: boolean): void => {
  if (modalOpenCurrentValue !== modalOpenPreviousValue) {
    document.body.style.overflow = modalOpenCurrentValue ? MODAL_SCROLL.OVERFLOW_BODY_SCROLL_LOCK : MODAL_SCROLL.OVERFLOW_BODY_DEFAULT;
  }
};

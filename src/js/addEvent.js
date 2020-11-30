export const dropArea = document.querySelector('.add-event-modal__form-field__drop-area');
export const fileInput = document.querySelector('.add-event-modal__form-field__drop-area__file-input');
export const fileInputMessage = document.querySelector('.add-event-modal__form-field__drop-area__message');

export const checkActive = () => {
    console.log('checking activity...');
    dropArea.classList.contains('active') ? dropArea.classList.remove('active') : dropArea.classList.add('active');
};

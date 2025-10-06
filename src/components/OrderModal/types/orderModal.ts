export interface IOrderModalContent {
  title: string
  closeAriaLabel: string
  emptyCart: {
    message: string
    hint: string
  }
  total: {
    label: string
    currency: string
  }
  form: {
    contactsTitle: string
    namePlaceholder: string
    phonePlaceholder: string
    addressPlaceholder: string
    paymentTitle: string
    paymentOptions: {
      cash: string
      online: string
    }
    submitButton: string
    privacyText: string
  }
}

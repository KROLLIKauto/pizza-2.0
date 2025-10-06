import { IOrderModalContent } from '../types/orderModal'

export const orderModalContent: IOrderModalContent = {
  title: 'Ваш заказ',
  closeAriaLabel: 'Закрыть',
  emptyCart: {
    message: 'Ваша корзина пуста',
    hint: 'Добавьте пиццу из меню, чтобы оформить заказ',
  },
  total: {
    label: 'Сумма заказа:',
    currency: 'руб',
  },
  form: {
    contactsTitle: 'Контакты',
    namePlaceholder: 'Ваше имя',
    phonePlaceholder: 'Телефон',
    addressPlaceholder: 'Адрес доставки',
    paymentTitle: 'Способ оплаты',
    paymentOptions: {
      cash: 'Оплата наличными или картой курьеру',
      online: 'Оплата картой онлайн на сайте',
    },
    submitButton: 'ОФОРМИТЬ ЗАКАЗ',
    privacyText: 'Нажимая кнопку «Оформить заказ» Вы соглашаетесь с политикой конфиденциальности',
  },
}

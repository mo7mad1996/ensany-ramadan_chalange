import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    totalCount: null as number | null, // تخزين قيمة totalCount
  }),
  actions: {
    // تعيين قيمة totalCount
    setCartCount(count: number) {
      this.totalCount = count;
    },
    // الحصول على قيمة totalCount
    getCartCount() {
      return this.totalCount;
    },
    // زيادة العدد
    increaseCartCount(amount: number) {
      if (this.totalCount === null) {
        this.totalCount = 0;
      }
      this.totalCount = Number(this.totalCount) + Number(amount);
    },
    // تقليل العدد
    decreaseCartCount(amount: number) {
      if (this.totalCount === null) {
        this.totalCount = 0;
      }
      this.totalCount -= amount;
    }
  }
});

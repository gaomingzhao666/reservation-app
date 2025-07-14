interface OrderInfo extends User {
  serviceImageUrl: string
  serviceProviderName: string
  serviceTitle: string
  serviceItem: string
  serviceDuration: string
  servicePrice: string
  serviceDateRange: {
    start: string
    end: string
  }
}

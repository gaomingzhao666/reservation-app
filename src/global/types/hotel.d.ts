interface HotelInfo {
  hotel_id: string
  address: string
  close_time: string
  closing_date: string
  hotel_id: string
  hotel_name: string
  open_time: string
  opening_date: string
  payment_methods: string[]
  price: number
  review_stars: number

  services: [
    {
      title: string
      service_items: [
        {
          title: string
          duration: string
          price: number
        },
      ]
    },
  ]
}

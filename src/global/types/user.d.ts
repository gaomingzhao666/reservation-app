interface User {
  uid: string
  email: string
  username: string
  avatar_url: string
  age: number | string

  booked_hotels: HotelInfo[]
}

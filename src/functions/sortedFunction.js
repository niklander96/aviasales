const sortingTickets = (tickets, sort) =>
  tickets.sort((a, b) => {
    if (sort === 'cheap') return a.price - b.price
    if (sort === 'fast') {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    }

    return (
      a.price -
      b.price +
      (a.segments[0].duration + a.segments[1].duration) -
      (b.segments[0].duration + b.segments[1].duration)
    )
  })

export default sortingTickets

const filtering = (items, allChecked, noChecked, oneChecked, twoChecked, threeChecked) =>
  items.filter((ticket) => {
    const stopsBefore = ticket.segments[0].stops.length
    const stopsAfter = ticket.segments[1].stops.length

    const matchedStops = (checkedProp, stopsNumber) =>
      checkedProp && stopsBefore === stopsNumber && stopsAfter === stopsNumber

    if (
      allChecked ||
      matchedStops(noChecked, 0) ||
      matchedStops(oneChecked, 1) ||
      matchedStops(twoChecked, 2) ||
      matchedStops(threeChecked, 3)
    ) {
      return true
    }

    return false
  })

export default filtering

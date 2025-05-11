function solution(tickets) {
  tickets.sort();
  const ticketsLength = tickets.length;

  const used = Array(ticketsLength).fill(false);

  function travel(current, route) {
    if (route.length === ticketsLength + 1) {
      return route;
    }
    for (let i = 0; i < ticketsLength; i++) {
      const [start, end] = tickets[i];

      if (start !== current) continue;
      if (used[i]) continue;
      used[i] = true;
      const resultRoute = travel(end, [...route, end]);
      if (resultRoute) return resultRoute;
      used[i] = false;
    }
  }

  return travel('ICN', ['ICN']);
}

export function getTypeColor(color) {
  switch (color) {
      case 'water':
          return '#63aae8'
      case 'grass':
          return '#6fd83e'
      case 'poison':
          return '#bf36c4'
      case 'rock':
          return '#6a7004'
      case 'ice':
          return '#02cbd6'
      case 'bug':
          return '#219307'
      case 'dragon':
          return '#ce6f4a'
      case 'fire':
          return '#ff3d0c'
      case 'ghost':
          return '#500177'
      case 'flying':
          return '#94f5f7'
      case 'fighting':
          return '#fc6819'
      case 'ground':
          return '#c8ce18'
      case 'steel':
          return '#c9c9c9'
      case 'electric':
          return '#f0f727'
      case 'dark':
          return '#494949'
      case 'psychic':
          return '#e047c6'
      case 'normal':
          return '#7c7c7c'
      case 'fairy':
          return '#f975f1'
      default:
          console.log(`Sorry, we don't know this type`);
  }
}
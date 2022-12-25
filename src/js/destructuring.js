export default function getProp(obj) {
    const result = [];
  
    obj.special.forEach((item) => {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = item;
  
      result.push({
        id,
        name,
        icon,
        description,
      });
    });
  
    return result;
  }
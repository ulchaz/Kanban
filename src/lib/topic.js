// src/lib/topic.js
export const topicStyles = {
    _purple: {
      backgroundColor: "#e9d4ff",
      color: "#9a48f1",
    },
    _orange: {
      backgroundColor: "#ffe4c2",
      color: "#ff6d00",
    },
    _green: {
      backgroundColor: "#b4fdd1",
      color: "#06b16e",
    },
    _gray: {
      backgroundColor: "#94a6be",
      color: "#ffffff",
    },
  };
  
  // Функция для получения цвета темы по названию
  export const getTopicColor = (topic) => {
    switch(topic) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_orange';
    }
  };
import './App.css';
import Header from './components/Header/Header';
import Column from './components/Column/Column';
import PopExit from './components/popups/PopExit/PopExit';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';

function App() {
  // Данные для колонок
  const columnsData = [
    {
      title: 'Без статуса',
      cards: [
        { theme: 'Web Design', themeClass: 'orange', title: 'Название задачи' },
        { theme: 'Research', themeClass: 'green', title: 'Название задачи' },
        { theme: 'Web Design', themeClass: 'orange', title: 'Название задачи' },
        { theme: 'Copywriting', themeClass: 'purple', title: 'Название задачи' },
        { theme: 'Web Design', themeClass: 'orange', title: 'Название задачи' },
      ]
    },
    {
      title: 'Нужно сделать',
      cards: [
        { theme: 'Research', themeClass: 'green', title: 'Название задачи' },
      ]
    },
    {
      title: 'В работе',
      cards: [
        { theme: 'Research', themeClass: 'green', title: 'Название задачи' },
        { theme: 'Copywriting', themeClass: 'purple', title: 'Название задачи' },
        { theme: 'Web Design', themeClass: 'orange', title: 'Название задачи' },
      ]
    },
    {
      title: 'Тестирование',
      cards: [
        { theme: 'Research', themeClass: 'green', title: 'Название задачи' },
      ]
    },
    {
      title: 'Готово',
      cards: [
        { theme: 'Research', themeClass: 'green', title: 'Название задачи' },
      ]
    }
  ];

  return (
    <>
      <div className="wrapper">
        {/* Попапы */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header />
        
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {columnsData.map((column, index) => (
                  <Column 
                    key={index}
                    title={column.title}
                    cards={column.cards}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
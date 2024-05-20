import Header from './header';
import Content from './content/content';

export default function App() {

  return (
    <div id='container' data-testid='container'>
      <div id='header' data-testid='header'>
        <Header />
      </div>

      <div id='content' data-testid='content'>
        <Content />
      </div>
    </div>
  )
}

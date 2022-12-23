import { Notify } from 'notiflix';
import css from './Searchbar.module.css'

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = evt => {
        evt.preventDefault();

        if (evt.currentTarget[1].value.trim() === '') { 
            return Notify.failure('Please enter your query')
        };
        onSubmit(evt.currentTarget[1].value);
        evt.currentTarget[1].value = '';
    }
    return (
        <header className={css.header}>
  <form className={css.form} onSubmit={handleSubmit}>
    <button type="submit" className={css.btn}>
      <span className={css.label}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

// <<header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
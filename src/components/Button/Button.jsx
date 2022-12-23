import css from './Button.module.css'

export const Button = ({ onLoadMore }) => <button type='button' className={css.btn} onClick={onLoadMore}>Load more</button>
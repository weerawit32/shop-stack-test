import styles from './Layouts.module.css'

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  )
}
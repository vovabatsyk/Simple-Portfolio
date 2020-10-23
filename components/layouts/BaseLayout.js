import Header from '../shared/Header'

export const BaseLayout = (props) => {
  const { className, children } = props
  return (
    <div className='layout-container'>
      <Header />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  )
}

const select_ele = ele => (
  document.querySelector(ele) &&
  document.querySelector(ele).addEventListener('click', () => {
    document.querySelector('body')?.classList.toggle('open-drawer')
    document.querySelector('.burger-wrap')?.classList.toggle('open-wrap')
  })
)

const navSticky = () => {
  let target = document.querySelector('header nav')
  let sticky = target?.offsetTop
  if (window.pageYOffset > sticky) {
    target?.classList.add('sticky')
  } else {
    target?.classList.remove('sticky')
  }
}

const openDrawer = () => {
  let sp_btn = document.querySelectorAll('.sp-drawer')
  select_ele('.menu-btn')
  select_ele('.burger-wrap')

  if (sp_btn) {
    for (let i = 0; i < sp_btn.length; i++) {
      sp_btn[i]?.addEventListener('click', () => {
        document.querySelector('body')?.classList.remove('open-drawer')
      })
    }
  }
}

const closeDrawer = () => {
  if (document.querySelector('.open-drawer')) {
    document.querySelector('body').classList.remove('open-drawer')
    document.querySelector('.burger-wrap')?.classList.remove('open-wrap')
  }
}

export {
  navSticky,
  openDrawer,
  closeDrawer
}
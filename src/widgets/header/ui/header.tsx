import { NavLink } from 'react-router-dom'
import { cn } from '@/shared/lib/tailwind.ts'
import { navigation } from '@/widgets/header'
import { LogoUI } from '@/shared/ui/logo.tsx'

export const Header = () => {
  return (
    <header
      className={
        'wrapper fixed flex w-full items-center justify-between gap-6 bg-white/30 py-3 backdrop-blur-md'
      }
    >
      <LogoUI />
      <nav className={'flex flex-wrap items-center gap-4'}>
        {navigation.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  'text-nowrap font-medium transition-all hover:font-bold',
                  isActive && 'font-bold'
                )
              }
              to={item.link}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </nav>
    </header>
  )
}

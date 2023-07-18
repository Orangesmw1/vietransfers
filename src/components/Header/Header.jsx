import React from 'react'
import logo from '../../assets/Vietranfers.png'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className='container mx-auto px-[200px] h-[120px] flex justify-between items-center'>
      <img className='w-[15%] h-[100%]' src={logo} alt='' />
      <form className='w-[35%]'>
        <div className='flex rounded-sm border-2 border-orange'>
          <input
            type='text'
            className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
            placeholder='Search '
          />
          <button className=' py-2 px-6 hover:opacity-90 bg-orange'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </div>
      </form>
      <div className='w-[15%] flex justify-end'>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <div className='bg-orange w-[50px] h-[40px] rounded pt-[5px]'>
            <DensityMediumIcon className=' text-white' />
          </div>
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Header

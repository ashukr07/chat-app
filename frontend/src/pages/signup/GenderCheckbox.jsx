
const GenderCheckbox = () => {
  return (
    <div className='flex m-2'>
        <div className='form-control'>
            <label className={'label-gap-2 cursor-pointer'}>
                <span>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label-gap-2 cursor-pointer'}>
                <span>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
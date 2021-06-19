import React from 'react'
import { connect } from 'react-redux';
import { getImageCat } from '../../store/actions/actionGetReqwest';
import classes from './cate.module.css'

function Cate({ arr, getImageCat }) {
    React.useEffect(() => {
        getImageCat(10)
    }, [getImageCat])
    return (
        <div className={classes.container}>
            {arr.data && arr.data.map(item => (
                <div key={item.id} className={classes.containerGrid} >
                    <img src={item.url} width='300px' height='300px' alt='' />
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    arr: state.arr
})
const mapDispatchToProps = {
    getImageCat
}

export default connect(mapStateToProps, mapDispatchToProps)(Cate)

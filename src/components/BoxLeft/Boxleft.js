import React from 'react'
import { connect } from 'react-redux';
import { getCategoryas, getImageCat } from '../../store/actions/actionGetReqwest';
import classes from './boxLeft.module.css'

function Boxleft({ getCategoryas, category, getImageCat }) {
    const [state, setstate] = React.useState(false)
    const [sort, setSort] = React.useState('')
    const [limit, setLimit] = React.useState(10)

    const show = () => {
        setstate(!state)
    }

    const limitImage = () => {
        setLimit(limit + 10)
    }
    const setCategory = (sort) => {
        setSort(sort)
    }
    React.useEffect(() => {
        getImageCat(limit, sort)
    }, [getImageCat, limit, sort])
    React.useEffect(() => {
        getCategoryas()
    }, [getCategoryas])
    return (
        <div className={classes.boxLeft}>
            <button onClick={limitImage} className={classes.sortCategory}> Limit image</button>
            <button onClick={show} className={classes.sortCategory}> Category</button>

            {state && category.data && category.data.map((item) => (
                <div key={item.id}>
                    <button onClick={() => setCategory(item.name)} className={classes.sortCategory}>{item.name}</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    category: state.category
})
const mapDispatchToProps = {
    getCategoryas,
    getImageCat
}

export default connect(mapStateToProps, mapDispatchToProps)(Boxleft)

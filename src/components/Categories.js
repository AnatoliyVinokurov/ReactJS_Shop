import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'smartphones',
                    name: 'Smartphones'
                },
                {
                    key: 'smartwatches',
                    name: 'Smartwatches & fitness trackers'
                },
                {
                    key: 'laptops',
                    name: 'Laptops & Tablets'
                },
                {
                    key: 'consoles',
                    name: 'Handheld Game Consoles'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories
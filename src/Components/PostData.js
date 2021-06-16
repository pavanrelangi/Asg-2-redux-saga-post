
import React from 'react';
import { connect } from'react-redux'

const PostData = ({ titleData }) => {
    let tdata = titleData.map(x => (
        <tr key={x.title}>
            <td>{x.title}</td>
            <td>{x.content}</td>
        </tr>
    ))
    console.log(titleData);
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {tdata}
                </tbody>
            </table>
        </div>
    )

}

const data =(store)=>{
    return {titleData: store.peoplevalues.titleData}
}

export const PostHoc=connect(data)(PostData)
   




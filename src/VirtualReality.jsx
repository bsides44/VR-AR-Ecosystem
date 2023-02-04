import React from 'react';

class VirtualReality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
            // Get data
        fetch('https://nextjsdemo-eight-bay.vercel.app/api/v1/vrmap').then(response => {
            response.json().then(dataJson => {
                this.setState({data: dataJson});
            })
        })            
    }


    render() {  
        return(
            <div className="directory">
                <table>
                    <tbody>
                            <tr>
                                <th>Name</th>
                                <th className="tLink">Link</th>
                            </tr>
                        {this.state.data ? this.state.data.nodes.map((node) => {
                            return <tr key={node.id}>
                                        <td>
                                            <p>{node.name}</p>
                                        </td>
                                        <td className="tLink">
                                            <a href={node.url} target="_blank" ref="norefferer noopener">{node.url}</a>
                                        </td>
                                    </tr>
                        
                        }) : null}
                    </tbody>
               </table>         
            </div>
        )
    };
}

export default VirtualReality;

import React from 'react';
// import data from './data';

// function AddItem() {
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parent: '',
            org: '' ,
            person: '' ,
            add: '' ,
            data: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.saveFile = this.saveFile.bind(this);
    }

    componentDidMount() {
        fetch('data.json').then(response => {
            response.json().then(dataJson => {
                this.setState({data: dataJson});
            })
        })            
    }

    
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
    }

    saveFile(e){
        e.preventDefault();

        const parent = this.state.parent
        const org = this.state.org
        const orgUrl = this.state.orgUrl
        const person = this.state.person
        const personUrl = this.state.personUrl
        const add = this.state.add
        const addUrl = this.state.addUrl
        const data = this.state.data

        // org
        const parentNode = data.nodes.find((node) => node.name === parent)

        if (parentNode) {
            const parentLink = data.links.find((link) => link.source.id === parentNode.id)
            const orgId = data.nodes.length + 1

            const nodeData = {  "id": orgId,
                            "name": org,
                            "val": parentNode.val <= 1 ? 1 : parentNode.val - 1,
                            "level": parentNode.level + 1,
                            "url": orgUrl
                        }
            const linkData = {
                            "source": Number(parentNode.id),
                            "target": orgId,
                            "level": parentLink ? parentLink.level + 1 : 3
                            }
            data.nodes.push(nodeData)
            data.links.push(linkData)

            // person
            const personId = orgId + 1
            const personNodeData = {  "id": personId,
                            "name": person,
                            "val": nodeData.val <= 1 ? 1 : nodeData.val - 1,
                            "level": nodeData.level + 1,
                            "url": personUrl
                        }
            const personLinkData = {
                            "source": nodeData.id,
                            "target": personId,
                            "level": linkData ? linkData.level + 1 : 3
                            }
            data.nodes.push(personNodeData)
            data.links.push(personLinkData)

            // additional
            if (add) {
                const addNodeData = {  "id": personId + 1,
                    "name": add,
                    "val": personNodeData.val = 1 ? 1 : personNodeData.val - 1,
                    "level": personNodeData.level + 1,
                    "url": addUrl
                }
            
                const addLinkData = {
                    "source": personNodeData.id,
                    "target": personId + 1,
                    "level": personNodeData ? personNodeData.level + 1 : 3
                }
                data.nodes.push(addNodeData)
                data.links.push(addLinkData)
            }
        }



    }

    render() {  
        return(
            <div className="col-lg-4 col-md-4 col-sm-4">
                <form id="formdata">
                <label>Parent Item on Graph</label>
                        <select id="parent" name="parent" placeholder="Parent Item on Graph" required onChange={this.handleChange}>
                            <option value="" default>Select one</option>
                            {this.state.data ? this.state.data.nodes.map((node) => {
                                return <option name={node.name} key={node.id}>{node.name}</option>
                            }) : null}
                        </select>
                    <input id="org" name="org" type="text" placeholder="New item" required onChange={this.handleChange}/>
                    <input id="orgUrl" name="orgUrl" type="text" placeholder="New item URL" onChange={this.handleChange}/>
                    <input id="person" name="person" type="text" placeholder="Sub-item" onChange={this.handleChange}/>
                    <input id="personUrl" name="personUrl" type="text" placeholder="Sub-item URL"  onChange={this.handleChange}/>
                    <input id="add" name="add" type="text" placeholder="Additional item" onChange={this.handleChange}/>
                    <input id="addUrl" name="addUrl" type="text" placeholder="Additional item URL" onChange={this.handleChange}/>

                    <input type="button" id="bt" value="save" onClick={this.saveFile} />
                </form>
            </div>
        )
    };
}

export default AddItem;

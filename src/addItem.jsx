import React from 'react';
import data from './data';

// function AddItem() {
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parent: '',
            org: '' ,
            person: '' ,
            add: '' ,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.saveFile = this.saveFile.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
    }

    saveFile(e){
        e.preventDefault();

        const parent = this.state.parent
        const org = this.state.org
        const person = this.state.person
        const add = this.state.add

        // org
        const parentNode = data.nodes.find((node) => node.name == parent)
        if (parentNode) {
            const parentLink = data.links.find((link) => link.source.id == parentNode.id)
            const orgId = data.nodes.length + 1

            const nodeData = {  "id": orgId,
                            "name": org,
                            "val": parentNode.val = 1 ? 1 : parentNode.val - 1,
                            "level": parentNode.level + 1}
            const linkData = {
                                "source": parentNode.id,
                                "target": orgId,
                                "level": parentLink.level + 1
                            }
            data.nodes.push(nodeData)
            data.links.push(linkData)

            // person
            const personId = orgId + 1
            const personNodeData = {  "id": personId,
                            "name": person,
                            "val": nodeData.val = 1 ? 1 : nodeData.val - 1,
                            "level": orgId.level + 1}
            const personLinkData = {
                                "source": orgId.id,
                                "target": personId,
                                "level": orgId.level + 1
                            }
            data.nodes.push(personNodeData)
            data.links.push(personLinkData)

            // additional

            if (add) {
                const addNodeData = {  "id": personId + 1,
                    "name": parent,
                    "val": personNodeData.val = 1 ? 1 : personNodeData.val - 1,
                    "level": personId.level + 1}
            
                const addLinkData = {
                    "source": personId.id,
                    "target": personId + 1,
                    "level": personId.level + 1
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
                            {data.nodes.map((node) => {
                                return <option name={node.name} key={node.id}>{node.name}</option>
                            })}
                        </select>
                    <input id="org" name="org" type="text" placeholder="New item" required onChange={this.handleChange}/>
                    <input id="person" name="person" type="text" placeholder="Sub-item" required onChange={this.handleChange}/>
                    <input id="add" name="add" type="text" placeholder="Additional item (optional)" onChange={this.handleChange}/>
                    <input type="button" id="bt" value="save" onClick={this.saveFile} />
                </form>
            </div>
        )
    };
}

export default AddItem;

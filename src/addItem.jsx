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
        this.handleSubmit = this.saveFile.bind(this);
    }
    
    handleChange(event) {
        this.setState({ event.target.id : event.target.value});
    }

    saveFile(e){
        event.preventDefault();
        console.log('save file', e)
        const parent, org, person, add = this.state;
        console.log(parent, org, person, add)
        // org
        const parentNode = data.nodes.find((node) => node.name == parent)
        if (parentNode) {
        console.log('parentNode', parentNode)

            const parentLink = data.links.find((link) => link.target == parentNode.id)
            const orgId = data.nodes.length

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
            console.log('nodeData', nodeData)
            console.log('linkData', linkData)

            // person
            const personId = orgId + 1
            const personNodeData = {  "id": personId,
                            "name": person,
                            "val": orgId.val = 1 ? 1 : orgId.val - 1,
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
                    "val": personId.val = 1 ? 1 : personId.val - 1,
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
                        <select id="parent" name="parent" placeholder="Parent Item on Graph" required>
                            <option value="" disabled>Parent Item on Graph</option>
                            {data.nodes.map((node) => {
                                return <option value={node.name} key={node.id}>{node.name}</option>
                            })}
                        </select>
                    <input id="org" name="org" type="text" placeholder="Organisation" />
                    <input id="person" name="person" type="text" placeholder="Person" />
                    <input id="add" name="add" type="text" placeholder="Additional item (optional)" />
                    <input type="button" id="bt" value="Add" onClick={saveFile} />
                </form>
            </div>
        )
    };
}

export default AddItem;

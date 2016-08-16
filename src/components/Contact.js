import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-2495-0010'
            }, {
                name: 'Betty',
                phone: '010-2495-0012'
            }, {
                name: 'Charile',
                phone: '010-2495-0013'
            }, {
                name: 'Horse',
                phone: '010-2495-0014'
            }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });
        console.log(key, 'is selected');
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();

            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(
                            this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={()=>{this.handleClick(i)}}
                />);
            });
        }
        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                />
            </div>
        );
    }
}

export default Contact;

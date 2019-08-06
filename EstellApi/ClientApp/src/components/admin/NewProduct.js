import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, getCategories } from '../../actions';
import Modal from '../Modal';
import Input from '../Helpers/Input';

 class NewProduct extends Component {
    
    state={
        Name: 'Toy1',
        CategoryId: '1',
        VendorCode: '12323',
        Price: '120',
        Age: '5',
        Vendor: 'ORB',
        Description: 'Super',
        Images: [],
        categories: [],
        ImagePreviewUrls: []
    }

    componentDidMount() {
      this.props.getCategories()
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    fileChangedHandler = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
          this.setState({
            Images: [...this.state.Images, file],
            ImagePreviewUrls: [...this.state.ImagePreviewUrls, reader.result]
          });
        }
        reader.readAsDataURL(file)
      }

    handleSubmit = (event) => {
        event.preventDefault();
        const {Name, Age, Description, Price, Vendor, VendorCode, CategoryId, Images} = this.state
        const upload = {
          Product:{
            Name: Name,
            Age: Age,
            Description: Description, 
            Price: Price,
            Vendor: Vendor,
            VendorCode: VendorCode,
            CategoryId: CategoryId,
          },
          Images: [...Images]
        }
        this.props.addProduct(upload);
      };

    render() {
        const {isOpen, onCancel, categories} = this.props;
        const { Name, VendorCode, Vendor, Price, Age, Description, CategoryId, ImagePreviewUrls } = this.state
        return (
            <Modal
            isOpen={isOpen}
            onCancel={onCancel}

            children={
                <form onSubmit={this.handleSubmit}>
                <Input width={250} id="Name" label="Название"  name="Name" value={Name} onChange={this.handleChange} />
                <Input width={250} id="Price" label="Цена" name="Price" value={Price} onChange={this.handleChange} />
                <Input width={250} id="Description" label="Описание" name="Description" value={Description} onChange={this.handleChange} />
                <Input width={250} id="Age" label="Возраст"  name="Age" value={Age} onChange={this.handleChange} />
                <Input width={250} id="VendorCode" label="Артикул" name="VendorCode" value={VendorCode} onChange={this.handleChange} />
                <Input width={250} id="Vendor" label="Бренд" name="Vendor" value={Vendor} onChange={this.handleChange} />
              
                <select name="CategoryId" value={CategoryId} onChange={this.handleChange}>
                  { categories[0] ? categories.map(el =>
                    <option value={el.id}>{el.name}</option>  
                  ) : ''
                }
                </select>
                <input type="file" onChange={this.fileChangedHandler} />   
                {
                    ImagePreviewUrls && 
                    ImagePreviewUrls.map(el =>
                        <img width={100} src={el}  alt="img"/>
                        )
                }
                <input type="submit" value="Добавить"/>
                </form>
             }
            >

            </Modal>
        )
    }
}
const mapDispatchToProps = { addProduct, getCategories };
const mapStateToProps = (state) => ({ categories: state.categories }); 

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
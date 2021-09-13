import React,{useContext} from 'react'
import Radium from 'radium';
import { Layout,Menu } from 'antd'
import { SideBarContext } from './SideBarContext';
import { Link } from 'react-router-dom';
import MyColors from '../util/colors';
const {Sider}=Layout

const SideBar = () => {
    const  [collapsed,setCollapsed] = useContext(SideBarContext);
    const styles={
        logo:{
            textAlign: 'center',
            padding: '16px',
            backgroundColor: MyColors.color3,
        },
        menu:{ 
            fontSize: '11px' 
        },
        menu_item:{
            margin:0,
            
        },
        menu_item_link:{
            color:MyColors.color1,
            ":hover":{
                color:MyColors.color2,
            }
        },
        menu_item_icon:{
            marginRight:'20px',
        },
        menu_item_badge:{
            float:'right',
            color:'grey',
        },
    }
    
    return (
          <Sider width={'70%'} className='hide-large' collapsedWidth='0' defaultCollapsed='true' style={{ position: 'fixed', top: '0', height: '100%', zIndex: 4, background: '#fff' }} trigger={null} collapsible collapsed={collapsed}>
                        <div style={styles.logo} >
                            <img src="store.png" width="50" alt="" />
                            <h5>Store</h5>
                        </div>
                        <Menu theme="light" mode="inline" style={styles.menu} >

                            <Menu.Item href='/wish' key="1" style={styles.menu_item}>
                                <Link to='/cart' key='11' style={styles.menu_item_link} ><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Cart</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Item key="2" style={styles.menu_item}>
                                <Link to="/wishlist" key="21" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Wishlist</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Item key="3" style={styles.menu_item}>
                                <Link to="/orders" key="31" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Orders</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>
                            
                            <Menu.Item key="4" style={styles.menu_item}>
                                <Link to="/news" key="41" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>News</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Item key="5" style={styles.menu_item}>
                                <Link  to="/notifications" key="51" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Notifications</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Item key="6" style={styles.menu_item}>
                                <Link to="instuctions" key="61" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Instructions</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Item key="7" style={styles.menu_item}>
                                <Link to="settings" key="71" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>Settings</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                            <Menu.Item key="8" style={styles.menu_item}>
                                <Link key="81" to="about" style={styles.menu_item_link}><i style={styles.menu_item_icon} className="fa fa-angle-up"></i>About</Link> <i style={styles.menu_item_badge}>2</i>
                            </Menu.Item>

                        </Menu>
                    </Sider>
    )
}

export default Radium(SideBar);

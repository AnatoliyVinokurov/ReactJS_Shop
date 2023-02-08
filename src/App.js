import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Smartphone Oukitel C22',
          img: 'sc22.jpeg',
          desc: 'Operating system Android 10 CPU MediaTek MT6761 SIM card amount dual SIM SIM card format Nano',
          category: 'smartphones',
          price: '121.05'
        },
        {
          id: 2,
          title: 'Smartphone Xiaomi Redmi Note 8 Pro',
          img: 'redminote8.jpeg',
          desc: 'Operating system MIUI 10 SIM card amount dual SIM SIM card format Nano-SIM Condition new Water',
          category: 'smartphones',
          price: '542.56'
        }
        ,
        {
          id: 3,
          title: 'OUKITEL WP20Pro 4GB RAM 64GB ROM',
          img: 'WP20Pro.jpeg',
          desc: 'Operating system Android 11 CPU MediaTek MT6875 SIM card amount dual SIM SIM card format Nano',
          category: 'smartphones',
          price: '542.56'
        },
        {
          id: 4,
          title: 'OUKITEL C18 PRO Smartphone 4GB RAM 64GB',
          img: 'OUKITELC18PRO.jpeg',
          desc: 'Operating system Android 9 SIM card amount dual SIM SIM card format Nano+Nano or Nano+TF Card',
          category: 'smartphones',
          price: '94.72'
        },
        {
          id: 5,
          title: 'Xgody Mate30mini 5,5 Inch 2GB RAM 16GB',
          img: 'XgodyMate30mini.jpeg',
          desc: 'Operating system Android 8.1 CPU MediaTek MT6580 SIM card amount dual SIM SIM card format Micro-SIM',
          category: 'smartphones',
          price: '76.38'
        },
        {
          id: 6,
          title: 'Smartphone IIIF150 Air1 Ultra 8GB+128GB',
          img: 'IIIF150Air1.jpeg',
          desc: 'Operating system Android 12 SIM card amount dual SIM SIM card format Nano+Nano or Nano+TF Card',
          category: 'smartphones',
          price: '370.10'
        }
        ,
        {
          id: 7,
          title: 'IP67 Waterproof C1 Plus Smart Band',
          img: 'IP67WaterproofC1.jpeg',
          desc: 'Battery capacity 90 mA⋅h Water resistance yes Waterproof rating IP67 Display size 0.96" Pedometer',
          category: 'smartwatches',
          price: '10.85'
        }
        ,
        {
          id: 8,
          title: 'Smart Watch Fitness Pressure Smartwatch',
          img: 'SmartWatchBlood.jpeg',
          desc: 'Standby time 5 days Battery capacity 50 mA⋅h Compatibility Android, iOS Water resistance yes Waterproof',
          category: 'smartwatches',
          price: '26.69'
        }
        ,
        {
          id: 9,
          title: 'D18S Smart Band Sport Smart Watch Waterproof',
          img: 'D18SSmartBand.jpeg',
          desc: 'After receiving the goods, please charge it for 2 hours before turning on the phone Smartwatcher should',
          category: 'smartwatches',
          price: '10.68'
        }
        ,
        {
          id: 10,
          title: 'Smart Bracelet Sports Activity Tracking Monitoring',
          img: 'SmartBraceletSports.jpeg',
          desc: 'Product parameter Movement type: electronic Screen shape: round Resolution: 240*240 Screen: 1.7',
          category: 'smartwatches',
          price: '11.20'
        }
        ,
        {
          id: 11,
          title: 'Smart Watch Y68 Bluetooth Fitness Tracker Sports',
          img: 'SmartWatchY68.jpeg',
          desc: 'Brand new bracelet charging method, quick-release detachable wristband design, can be charged by plugging',
          category: 'smartwatches',
          price: '26.00'
        }
        ,
        {
          id: 12,
          title: 'M7 Smart Wristbands Heart Rate Monitor Sport Bracelet',
          img: 'M7SmartWristbands.jpeg',
          desc: 'Support 13 languages: Russian, English, French, German, Dutch ,Portuguese,Spanish,Turkish,Polish,Malaysian',
          category: 'smartwatches',
          price: '18.07'
        }
        ,
        {
          id: 13,
          title: 'Thinkbook 15 G3 Acl Amd Ryzen 5 5500u 16gb 512gb Ssd 15.6',
          img: 'Thinkbook15G3.jpeg',
          desc: 'Amd Ryzen 5 5500u 16gb 512gb Ssd 15.6 "fhd Freedos Portable Computer 21a40038tx',
          category: 'laptops',
          price: '1000.56'
        }
        ,
        {
          id: 14,
          title: 'Excalibur G9111.1290-ex80x-c Intel Core I9-12900hk 64gb Ram',
          img: 'ExcaliburG9111.jpeg',
          desc: 'Intel Core I9-12900hk 64gb Ram 2tb Nvme Ssd 16gb Rtx3080ti Freedos Phreedos Phar',
          category: 'laptops',
          price: '6293.03'
        }
        ,
        {
          id: 15,
          title: 'X415ea Intel Core I5 1135g7 8 Gb 2 Tb',
          img: 'X415ea.jpeg',
          desc: 'Intel Core I5 1135g7 8 Gb 2 Tb Ssd Freedos 14 "fhd Portable Computer',
          category: 'laptops',
          price: '1389.41'
        }
        ,
        {
          id: 16,
          title: 'Nitro 5 An515-45 Amd Ryzen 5 5600h 16gb',
          img: 'Nitro5.jpeg',
          desc: 'Amd Ryzen 5 5600h 16gb 512gb Ssd Rtx3050 Freedos 15.6 "fhd Portable Computer',
          category: 'laptops',
          price: '2945.85'
        }
        ,
        {
          id: 17,
          title: 'Vivobook K513ep-l1576 Intel Core I5 1135g7 8gb 512gb Ssd Mx330',
          img: 'VivobookK513ep.jpeg',
          desc: 'Intel Core I5 1135g7 8gb 512gb Ssd Mx330 Freedos 15.6 "fhd Portable Computer',
          category: 'laptops',
          price: '1255.96'
        }
        ,
        {
          id: 18,
          title: 'Tulpar T7 V20.5 Intel Core I7-12700h 16gb Ram 500gb Ssd 6gb',
          img: 'TulparT7.jpeg',
          desc: 'Intel Core I7-12700h 16gb Ram 500gb Ssd 6gb Rtx3060 Freedos 17.3" Fhd 144hz Game Computer',
          category: 'laptops',
          price: '2242.28'
        }
        ,
        {
          id: 19,
          title: 'Nostalgic Classic Dual-Shake Game Console',
          img: 'Nostalgic.jpeg',
          desc: 'X1 4.3-inch Game Console Nostalgic Classic Dual-Shake Game Console 8G Built-in 10,000 Games',
          category: 'consoles',
          price: '43.80'
        }
        ,
        {
          id: 20,
          title: 'Handheld Game Console X12 Plus',
          img: 'ConsoleX12.jpeg',
          desc: '3000+ Games 16GB ROM Video Game Console Handheld Game Console X12 Plus 7 Inch Built-in 16GB',
          category: 'consoles',
          price: '74.19'
        }
        ,
        {
          id: 21,
          title: 'X12 Plus 5.1inch Retro Handheld Game Console',
          img: 'X12Plus5.jpeg',
          desc: 'X12 Plus 5.1inch HD Large Screen 16G Retro Handheld Game Console with Built-in Free 30000 Games Dual',
          category: 'consoles',
          price: '59.13'
        }
        ,
        {
          id: 22,
          title: 'X7 PSP GBA SFC Retro Game Console',
          img: 'X7PSPGBA.jpeg',
          desc: 'X7 PSP GBA SFC Retro Game Console Portable Handheld HD Video Player Game Joystick For Gameboy',
          category: 'consoles',
          price: '25.46'
        }
        ,
        {
          id: 23,
          title: 'Retro Game Console Handheld Portable 800',
          img: 'Portable800.jpeg',
          desc: 'Retro Game Console Handheld Portable 800 Built-in 4.3 Inch Games',
          category: 'consoles',
          price: '55.57'
        }
        ,
        {
          id: 24,
          title: 'Type-C Gaming Controller Portable Joystick Gamepads',
          img: 'WirelessGamepadBluetooth.jpeg',
          desc: 'Wireless Gamepad Bluetooth-compatible Type-C Gaming Controller Portable Joystick',
          category: 'consoles',
          price: '26.28'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOreder = this.deleteOreder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOreder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOreder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

}

export default App;

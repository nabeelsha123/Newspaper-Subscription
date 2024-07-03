import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
            <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>District</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>1234567890</td>
        <td>456 Elm St</td>
        <td>67890</td>
        <td>Pathanamthitta</td>
        <td>john.doe@example.com</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>9876543210</td>
        <td>789 Oak Ave</td>
        <td>54321</td>
        <td>Thiruvananthapuram</td>
        <td>jane.smith@example.com</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Michael Johnson</td>
        <td>2345678901</td>
        <td>321 Pine Rd</td>
        <td>12345</td>
        <td>Kollam</td>
        <td>michael.johnson@example.com</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sarah Brown</td>
        <td>8765432109</td>
        <td>987 Maple Dr</td>
        <td>98765</td>
        <td>Palakkad</td>
        <td>sarah.brown@example.com</td>
      </tr>
      <tr>
        <td>5</td>
        <td>David Wilson</td>
        <td>3456789012</td>
        <td>654 Birch Ln</td>
        <td>45678</td>
        <td>Ernakulam</td>
        <td>david.wilson@example.com</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Emily Taylor</td>
        <td>7890123456</td>
        <td>876 Cedar St</td>
        <td>89012</td>
        <td>Malappuram</td>
        <td>emily.taylor@example.com</td>
      </tr>
      <tr>
        <td>7</td>
        <td>James Lee</td>
        <td>5678901234</td>
        <td>234 Pinecrest Ave</td>
        <td>56789</td>
        <td>Kannur</td>
        <td>james.lee@example.com</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Olivia Hernandez</td>
        <td>9012345678</td>
        <td>789 Elmwood Dr</td>
        <td>34567</td>
        <td>Alappuzha</td>
        <td>olivia.hernandez@example.com</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Ethan Martinez</td>
        <td>6789012345</td>
        <td>123 Oakwood Ln</td>
        <td>89012</td>
        <td>Kozhikode</td>
        <td>ethan.martinez@example.com</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Isabella Adams</td>
        <td>1234567890</td>
        <td>456 Birchwood Dr</td>
        <td>56789</td>
        <td>Idukki</td>
        <td>isabella.adams@example.com</td>
      </tr>
    </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll

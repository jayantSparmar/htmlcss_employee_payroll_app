window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
    });
    
    const createInnerHtml = () => {
      const headerHtml = ` 
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
      `;
      const innerHtml = `${headerHtml}
      <tr>
          <td>
          <img class="profile" alt="" src="../assets/profile-images/jayant-dp1.jpg"> 
          </td>
          <td>Jayant Singh Parmar</td>
          <td>Male</td>
          <td><div class="dept-label">Accounting</div>
              <div class="dept-label">Engineer</div></td>
          <td>499999</td>
          <td>1 Jan 2016</td>
          <td>
          <img id="1" onclick="removie(this)" alt="delete" 
                  src="../assets/icons/delete-black-18dp.svg">
          <img id="1" alt="edit" onclick="update(this)"
                  src="../assets/icons/create-black-18dp.svg">
          </td>
      </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
    }
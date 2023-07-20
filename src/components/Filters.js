import React from 'react';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (filterType, event) => {
    onFilterChange(filterType, event.target.value);
  };

  return (
    
    <div className="filters">
      <div className="filteritem">
      <div>
      {/* Country filter */}
        <label>Country:</label> 
        <select onChange={(e) => handleFilterChange('country', e)}>
        <option value="">All Countries</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Denmark">Denmark</option>
        <option value="Italy">Italy</option>
        <option value="Sumer and Akkadian Empire">Sumer and Akkadian Empire</option>
        <option value="Achaemenid Empire">Achaemenid Empire</option>
        <option value="India">India</option>
        <option value="India/Iran/Iraq/Egypt/Tajikistan">India/Iran/Iraq/Egypt/Tajikistan</option>
        <option value="Italy">Italy</option>
        <option value="Egypt">Egypt</option>
        <option value="Iceland">Iceland</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="France">France</option>
        <option value="Republic of Ireland">Republic of Ireland</option>
        <option value="Argentina">Argentina</option>
        <option value="Algeria, French Empire">Algeria</option>
        <option value="Romania, France">Romania</option>
        <option value="Spain">Spain</option>
        <option value="England">England</option>
        <option value="Russia">Russia</option>
        <option value="Germany">Germany</option>
        <option value="United States">United States</option>
        <option value="Greece">Greece</option>
        <option value="Colombia">Colombia</option>
        <option value="Saxe-Weimar">Saxe-Weimar</option>
        <option value="Brazil">Brazil</option>
        <option value="Norway">Norway</option>
        <option value="Czechoslovakia">Czechoslovakia</option>
        <option value="Japan">Japan</option>
        <option value="Sweden">Sweden</option>
        <option value="China">China</option>
        <option value="Austria">Austria</option>
        <option value="Roman Empire">Roman Empire</option>
        <option value="Portugal">Portugal</option>
        <option value="Mexico">Mexico</option>
        <option value="Sultanate of Rum">Sultanate of Rum</option>
        <option value="Persia, Persian Empire">Persia, Persian Empire</option>
        <option value="Sudan">Sudan</option>
        <option value="Ireland">Ireland</option>
        <option value="France/Belgium">France/Belgium</option>
        </select>
      </div>

      <div>
      {/* Language filter */}
        <label>Language:</label> 
        <select onChange={(e) => handleFilterChange('language', e)}>
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Danish">Danish</option>
          <option value="Italian">Italian</option>
          <option value="Akkadian">Akkadian</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Arabic">Arabic</option>
          <option value="Old Norse">Old Norse</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="Russian">Russian</option>
          <option value="Greek">Greek</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Sanskrit">Sanskrit</option>
          <option value="Japanese">Japanese</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Swedish">Swedish</option>
          <option value="Chinese">Chinese</option>
          <option value="Classical Latin">Classical Latin</option>
          <option value="Persian">Persian</option>
         </select>
      </div>
          {/* Page filter */}
          <select onChange={(e) => handleFilterChange('pagesRange', e)}>
            <option value="">All Page Ranges</option>
            <option value="1-100">1-100 pages</option>
            <option value="101-200">101-200 pages</option>
            <option value="201-300">201-300 pages</option>
            <option value="301-400">301-400 pages</option>
            <option value="401-500">401-500 pages</option>
            <option value="501-600">501-600 pages</option>
            <option value="601-700">601-700 pages</option>
            <option value="701-800">701-800 pages</option>
            <option value="801-900">801-900 pages</option>
            <option value="901-1000">901-1000 pages</option>
            <option value="1001-1100">1001-1100 pages</option>
            <option value="1101-1200">1101-1200 pages</option>
            <option value="1201-1300">1201-1300 pages</option>
            <option value="1301-1400">1301-1400 pages</option>
            <option value="1401-1500">1401-1500 pages</option>
            <option value="1501-1600">1501-1600 pages</option>
            <option value="1601-1700">1601-1700 pages</option>
            <option value="1701-1800">1701-1800 pages</option>
            <option value="1901-2000">1901-2000 pages</option>
            <option value="2001-2100">2001-2100 pages</option>
            <option value="2101-2200">2101-2200 pages</option>
            <option value="2201-2300">2201-2300 pages</option>
            <option value="2301-2400">2301-2400 pages</option>
            <option value="2401-2500">2401-2500 pages</option>
           </select>

          {/* Century filter *the function is not working */}
          <select onChange={(e) => handleFilterChange('yearCentury', e)}>
            <option value="">All Centuries</option>
            <option value="16th century">16th century</option>
            <option value="17th century">17th century</option>
            <option value="18th century">18th century</option>
            <option value="19th century">19th century</option>
          </select>

       </div>  
            <br></br>
                <h2 className="center-text">Book List</h2>
    </div>
    
  );
};

export default Filters;

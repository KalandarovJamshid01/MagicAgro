import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useSelector } from "react-redux";
function DocumentContentArea() {
   const [isOpen, setOpen] = useState(false);
   const { content } = useSelector((state) => state.content);
   return (
      <>
         <div className="col-lg-6 order-lg-2 order-3">
            <h3 className="document-title mb-70">Barcha ma'lumotlar</h3>
            <div className="document-middle-area">
               {/* introduction-item */}

               {/* feature-item */}
               <div className="document-item" id="featuers">
                  <div className="doc-item-title">
                     <img src={process.env.PUBLIC_URL + "/images/icons/arrow.svg"} alt="docIMG" />
                  </div>
                  {content?.le?.map((val) => (
                     <p className="doc-item-list mb-0">
                        <h4>{val.title}</h4>
                        <p>{val.content}</p>
                     </p>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default DocumentContentArea;

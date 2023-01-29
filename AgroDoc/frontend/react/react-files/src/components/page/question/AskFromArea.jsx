import React from "react";
import Select from "react-select";

function AskFromArea() {
   const optionsForQuestion = [
      { value: "1", label: "Poliz ekinlari" },
      { value: "2", label: "Bog'dorchilik" },
      { value: "3", label: "Paxta va G'alla" },
   ];
   return (
      <>
         <div className="ask-form-section pt-100">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-12">
                     <div className="ask-form-header">
                        <h5>Savolingiz bormi?</h5>
                        <div className="topic-select">
                           <Select
                              placeholder="Yo'nalish tanlang"
                              options={optionsForQuestion}
                           ></Select>
                        </div>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className="ask-form-area">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="row justify-content-center">
                              <div className="col-sm-6">
                                 <input type="text" placeholder="Ismingiz" />
                              </div>
                              <div className="col-sm-6">
                                 <input type="text" placeholder="Email manzilingiz" />
                              </div>
                              <div className="col-12">
                                 <textarea rows={5} placeholder="Savolingiz" defaultValue={""} />
                              </div>
                              <div className="col-sm-6 text-center">
                                 <button className="form-submit-btn">Yuborish</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default AskFromArea;

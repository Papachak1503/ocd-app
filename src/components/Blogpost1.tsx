import { lightningCssTransform } from "next/dist/build/swc/generated-native";
import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสต์เมื่อวันที่ 18 ธันวาคม 2567 โดยจักรพรรดินี ข้อนอก</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่
                <ul className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                  <li>
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI)
                  </li>
                  <li>มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li> มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ul>
              </p>
              <p className="lead">การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การคือ
                <ul className="ml-4" style={{ listStyleType: "upper-alpha" }}>
                  <li> การกระทำที่มีการวางแผนล่วงหน้า </li>
                  <li> นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li> บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    การเปลี่ยนแปลงวัฒนธรรม เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    ระบบการวางแผนลยุทธ์ด้าน Behavioral Science สร้างความเข้าใจ
                    ในพัฒนาและเปลี่ยนแปลงองค์การ เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ul>
              </p>
              <p className="lead">OD มีรากฐานมาจากอะไร</p>
              <p>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย ได้แก่
                <ul className="ml-4" style={{ listStyleType: "upper-roman" }}>
                  <li> จิตวิทยาสังคม(Social Psychology) </li>
                  <li> กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    ทฤษฎีการจัดการแบบมีส่วนร่วม(Participative Management Theory)
                  </li>
                  <li> พฤติกรรมองค์การ(Organization Behavior) </li>
                  <li> สังคมวิทยา(Sociology) </li>
                  <li> จิตบำบัด (Psychotherapy)</li>
                </ul>
              </p>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD) ได้แก่
                <ul className="ml-4" style={{ listStyleType: "lower-roman" }}>
                  <li>
                    OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li>เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                    บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                  <li> OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้ </li>
                  <li>OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                  <li> OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  <li>
                    OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      <li>ค่านิยม (Values)</li>
                      <li>ทัศนคติ (Attitudes)</li>
                      <li>บรรทัดฐาน (Norms)</li>
                      <li>วิธีการบริหารจัดการ (Management Practices)</li>
                    </ul>
                  </li>
                  <li>
                    ผู้มีบทบาทสำคัญในการทำ OD
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                      <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                      <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                      <li>อาจารย์ (Teacher)</li>
                      <li>ผู้ฝึกสอน (Coach) </li>
                    </ul>
                  </li>
                  <li>
                    OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned
                    Follow-up)
                  </li>
                  <li>
                    OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                    หรือโครงสร้างขององค์การ
                  </li>
                </ul>
              </p>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              <p>ลักษณะสำคัญของการพัฒนาองค์กร มีดังนี้ </p>
              <p>
                <p>
                  1. OD เกี่ยวข้องกับการเปลี่ยนแปลงกลยุทธ์
                  <ul className="ml-4">
                    <li>
                      โครงสร้างและ/หรือกระบวนการของระบบทั้งระบบมีความหมายครอบคลุมตั้งแต่องค์การ
                      ฝ่ายหรือกลุ่มงาน
                    </li>
                  </ul>
                </p>
                <p>
                  2.OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                  Behavioral Science ให้กับสมาชิกขององค์การ{" "}
                  <ul className="ml-4">
                    <li>
                      เช่น ภาวะผู้นำ กระบวนการกลุ่ม การออกแบบงาน กลยุทธ์
                      รูปแบบองค์การ ความสัมพันธ์ระหว่างประเทศ เป็นต้น
                    </li>
                  </ul>
                </p>
                <p>
                  <li>
                    3.OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้
                  </li>
                </p>
                <p>
                  <li>
                    4.OD
                    เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                  </li>
                </p>
                <li> 5.OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
              </p>
              <p className="lead">
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
              </p>
              <p>
                1. ความเข้าใจในระบบสังคม (Understanding social systems)
                คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                เช่น
                <ul className="ml-4">
                  <li>จิตวิทยา</li>
                  <li>จิตวิทยาสังคม</li>
                  <li>สังคมวิทยา</li>
                  <li>รัฐศาสตร์</li>
                  <li>เศรษฐศาสตร์</li>
                  <li>ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น</li>
                </ul>
              </p>
              <p>
                <li>2. เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง</li>
              </p>
              <p>
                <li>
                  3. เข้าใจบทบาทบุคคลที่สาม (Third Party)
                  ของที่ปรึกษาด้านการเปลี่ยนแปลง บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                  เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                </li>
              </p>
              <p></p>
              <p className="lead">ค่านิยมของ OD (OD Values)</p>
              <p>
                ค่านิยมของ OD คือ
                <ul className="ml-4"></ul>
                <li>
                  1. การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                  Dignity)
                </li>
                <li>
                  2. การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented{" "}
                </li>
                <li>3. ความเท่าเทียม (Democracy)</li>
                <li>4. ความสุจริต (Honesty)</li>
                <li>5. การกระจายอำนาจ (Empowerment)</li>
                <li>6. ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                <li>7. มีจิตช่วยเหลือ (Being Helpful)</li>
              </p>
              <p className="lead">สรุปค่านิยมของ OD </p>
              <p>
                สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
                <ul className="ml-4"></ul>
                <li>
                  1. การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)
                </li>
                <li>2. การให้ความร่วมมือ (Collaboration)</li>
                <li>3. ความจริงใจ (Authenticity)</li>
                <li>4. ความเข้าใจในตนเอง (Self-awareness)</li>
                <li>5. การกระจายอำนาจ (Empowerment)</li>
                <li>
                  6. ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                  Justice
                </li>
              </p>
              <p className="lead">
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
              </p>
              <p>
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM) ได้แก่
                <ul className="ml-4"></ul>
                <li>
                  {" "}
                  1. OD
                  ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก{" "}
                </li>
                <li>
                  {" "}
                  -ส่วน CM
                  ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                </li>
                <li>
                  2. OD มุ่งไปที่พลวัตของระบบในองค์การ
                  ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                  สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น{" "}
                </li>
                <li>-ส่วน CM มุ่งไปที่ผลลัพธ์มากกว่า</li>
                <li>
                  3. OD
                  ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                </li>
                <li>
                  {" "}
                  -ส่วน CM
                  เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ
                </li>
                <li>
                  4. OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                  การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                  เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม{" "}
                </li>
                <li>
                  {" "}
                  -ส่วน CM
                  จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ{" "}
                </li>
              </p>
              <p className="lead">
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM)
              </p>
              <p>
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM) ได้แก่
                <ul className="ml-4"></ul>
                <li>1. OD </li>
                <li> -การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</li>
                <li>
                  {" "}
                  -การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD
                </li>
                <li>ส่วน CM</li>
                <li>-การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ </li>
                <li>-เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</li>
                <li>2. OD </li>
                <li>
                  -ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                  กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน{" "}
                </li>
                <li>
                  {" "}
                  -ถ่ายทอดความรู้
                  และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                </li>
                <li>ส่วน CM</li>
                <li>-มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน </li>
                <li> -ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
              </p>
              <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
              <p>
                พัฒนาการของ OD (The Revolution of OD) ได้แก่
                <ul className="ml-4"></ul>
                <li>
                  1. มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                  Background หรือ T-group){" "}
                </li>
                <li>2. มาจากรากฐาน Action Research และ Survey Feedback</li>
                <li>3. มาจากรากฐาน Normative Background</li>
                <li>
                  -แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                  Best Way) ในการบริหารองค์การ
                </li>
                <li> -รูปแบบการจัดการแบบมีส่วนร่วม</li>
                <li> -หลักการของตาข่าย (เครือข่าย)</li>
                <li>
                  4. มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                  และ Quality-of-Work-Life)
                </li>
                <li>
                  1)
                  มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                </li>
                <li>2) เน้นการมีส่วนร่วมของพนักงาน </li>
                <li>3) การจัดการทั่วทั้งองค์การ (Total Quality Management) </li>
                <li>
                  {" "}
                  Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย -Quality =
                  คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ -Management =
                  การบริหารองค์การ
                </li>
                <li>4) คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                <li>5) มาจากรากฐาน Strategic Change </li>
              </p>
              <p className="lead">
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
              </p>
              <p>
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change) ได้แก่
                <ul className="ml-4"></ul>
                <li>1.รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin's Change Model) </li>
                <li>2. มาจากรากฐาน Action Research และ Survey Feedback</li>
                <li>3. มาจากรากฐาน Normative Background</li>
                <li>
                  -แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                  Best Way) ในการบริหารองค์การ
                </li>
                <li> -รูปแบบการจัดการแบบมีส่วนร่วม</li>
                <li> -หลักการของตาข่าย (เครือข่าย)</li>
                <li>
                  4. มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                  และ Quality-of-Work-Life)
                </li>
                <li>
                  1
                  มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                </li>
                <li>2 เน้นการมีส่วนร่วมของพนักงาน </li>
                <li>3 การจัดการทั่วทั้งองค์การ (Total Quality Management) </li>
                <li>
                  {" "}
                  Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย -Quality =
                  คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ -Management =
                  การบริหารองค์การ
                </li>
                <li>4 คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                <li>5 มาจากรากฐาน Strategic Change </li>
              </p>

              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor
                quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}

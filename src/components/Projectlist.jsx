import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import adminpanel from '/src/assets/images/adminpanel.jpg'
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>


            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todo-using-chakra-seven.vercel.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
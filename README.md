## Routes

### Teachers
* GET ONE
  * `/teachers/:teacherId`
* POST
  * `/teachers`

### Subjects
* GET ALL 
  * `/teachers/:teacherId/subjects`
* GET ONE
  * `/teachers/:teacherId/subjects/:subjectId`

### Assignments
* GET ALL
  * `/teachers/:teacherId/subjects/:subjectId/assignments`
* GET ONE
  * `/teachers/:teacherId/subjects/:subjectId/assignments/:assignmentId`
* POST
  * `/teachers/:teacherId/subjects/:subjectId/assignments`
* PUT
  * `/teachers/:teacherId/subjects/:subjectId/assignments/:assignmentId`
* DELETE
  * `/teachers/:teacherId/subjects/:subjectId/assignments`

### Students
* GET ALL
  * `/teachers/:teacherId/subjects/:subjectId/students`
* GET ONE
  * `/teachers/:teacherId/subjects/:subjectId/students/:studentId/assignments`
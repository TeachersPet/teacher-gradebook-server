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
* GET ALL ASSIGNMENTS IN ONE SUBJECT
  * `/teachers/:teacherId/subjects/:subjectId/assignments`
* GET ALL ASSIGNMENTS IN ONE SUBJECT FOR ONE STUDENT
  * `/teachers/:teacherId/subjects/:subjectId/assignments?student=:studentId`
* GET ONE
  * `/teachers/:teacherId/subjects/:subjectId/assignments/:assignmentId`
* POST
  * `/teachers/:teacherId/subjects/:subjectId/assignments`
* DELETE
  * `/teachers/:teacherId/subjects/:subjectId/assignments`

### Assignments_Students
* PUT
  * `/teachers/:teacherId/subjects/:subjectId/assignments/:assignmentId/students/:studentId`

### Students
* GET ALL
  * `/teachers/:teacherId/subjects/:subjectId/students`
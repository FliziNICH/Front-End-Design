import './App.css'

function StudentCard({ name, age, major, grade }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Umur: {age} tahun</p>
      <p>Jurusan: {major}</p>
      <p>Nilai: {grade}</p>
    </div>
  )
}

function App() {
  const students = [
    {
      id: 1,
      name: 'Jeremy',
      age: 20,
      major: 'Teknik Informatika',
      grade: 'A',
    },
    {
      id: 2,
      name: 'Marchia',
      age: 21,
      major: 'Sistem Informasi',
      grade: 'B+',
    },
    {
      id: 3,
      name: 'Kairu',
      age: 19,
      major: 'Teknik Komputer',
      grade: 'A-',
    },
    {
      id: 4,
      name: 'Julian',
      age: 20,
      major: 'Teknik Informatika',
      grade: 'A',
    },
  ]

  return (
    <div className="container">
      <h1>Daftar Mahasiswa</h1>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            major={student.major}
            grade={student.grade}
          />
        ))}
      </div>
    </div>
  )
}

export default App
INSERT INTO department (name)
  VALUES
  ('HR'),
  ('Sales'),
  ('Tech support');

INSERT INTO role (title, salary, department_id)
  VALUES
  ('Manager', 123.25, 1),
  ('employee', 15, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ('Matt', 'boss', 1, NULL),
  ('steve', 'employee', 2, 1);

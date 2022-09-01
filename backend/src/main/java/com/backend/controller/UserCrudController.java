package com.backend.controller;

import com.backend.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping({ "/users" })
public class UserCrudController {

	private List<User> users = createList();

	@GetMapping(produces = "application/json")
	public List<User> firstPage() {
		return users;
	}

	@DeleteMapping(path = { "/{id}" })
	public User delete(@PathVariable("id") int id) {
		User deletedEmp = null;
		for (User user : users) {
			if (user.getUserId().equals(id)) {
				users.remove(user);
				deletedEmp = user;
				break;
			}
		}
		return deletedEmp;
	}

	@PostMapping("/post")
	public User create(@RequestBody User user) {
		users.add(user);
		return user;
	}

	private static List<User> createList() {
		List<User> tempUsers = new ArrayList<>();
		User emp1 = new User();
		emp1.setName("emp1");
		emp1.setDesignation("manager");
		emp1.setUserId("1");
		emp1.setSalary(3000);

		User emp2 = new User();
		emp2.setName("emp2");
		emp2.setDesignation("developer");
		emp2.setUserId("2");
		emp2.setSalary(3000);
		tempUsers.add(emp1);
		tempUsers.add(emp2);
		return tempUsers;
	}

}

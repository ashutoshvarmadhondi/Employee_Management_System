package com.ems.backend.mapper;

import com.ems.backend.dto.EmployeeDto;
import com.ems.backend.entity.Employee;

public class EmployeeMapper {
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto (
				employee.getId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getEmail()
			);
	}
		public static Employee mapToEmployee(EmployeeDto employeeDto) {
			return new Employee(
					employeeDto.getId(),
					employeeDto.getFirstName(),
					employeeDto.getLastName(),
					employeeDto.getEmail()
					);
					
	}
}

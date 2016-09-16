module PeopleHelper
	def checked(area)
		@people.security.nil? ? false : @people.security.match(area)
	end
end

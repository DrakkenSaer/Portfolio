module ApplicationHelper
  def full_title(page_title)
    base_title = "Work in progress"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
  
  def menu_empty?(object)
    object.all.empty? unless signed_in?
  end
end

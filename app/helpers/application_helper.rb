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
  
  def header_link(title, path)
    current_page?(path) ? link_to(title, path, class: "active") : link_to(title, path)
  end

  def page_base(container)
    container.empty? ? "container" : "#{container}"
  end
end